"""Tests for ai_blog.py. Run from the repo root:

    python3 -m unittest discover -s .github/scripts -p "test_*.py"
"""

import contextlib
import io
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ai_blog  # noqa: E402

POST = "---\ntitle: {title}\ncategory: AI Blog\ndate: 2026-01-01\n---\nSome words.\n"
CONFIG = (
    "nav = [\n"
    '  { "AI Blog" = [\n'
    '    { "All posts" = "ai.md" },\n'
    '    { "One" = "ai/One.md" },\n'
    "  ] },\n"
    "]\n"
)


class CheckPostTests(unittest.TestCase):
    def test_post_in_ai_folder_is_clean(self):
        self.assertEqual(ai_blog.check_post("ai/One.md", "One", {}), [])

    def test_post_outside_ai_folder_warns(self):
        problems = ai_blog.check_post("One.md", "One", {})
        self.assertEqual(len(problems), 1)
        self.assertIn("outside docs/ai/", problems[0])

    def test_straight_double_quote_in_title_warns(self):
        problems = ai_blog.check_post("ai/One.md", 'A "quoted" word', {})
        self.assertEqual(len(problems), 1)
        self.assertIn("straight double quote", problems[0])

    def test_curly_quotes_in_title_are_fine(self):
        self.assertEqual(ai_blog.check_post("ai/One.md", "A “quoted” word", {}), [])

    def test_same_title_twice_warns(self):
        seen = {}
        self.assertEqual(ai_blog.check_post("ai/One.md", "One", seen), [])
        problems = ai_blog.check_post("One.md", "One", seen)
        self.assertTrue(any("same title as ai/One.md" in p for p in problems))


class MainTests(unittest.TestCase):
    def test_main_warns_for_misplaced_duplicate_post(self):
        old = os.getcwd()
        with tempfile.TemporaryDirectory() as tmp:
            os.makedirs(os.path.join(tmp, "docs", "ai"))
            with open(os.path.join(tmp, "docs", "ai", "One.md"), "w", encoding="utf-8") as f:
                f.write(POST.format(title="One"))
            with open(os.path.join(tmp, "docs", "One.md"), "w", encoding="utf-8") as f:
                f.write(POST.format(title="One"))
            with open(os.path.join(tmp, "zensical.toml"), "w", encoding="utf-8") as f:
                f.write(CONFIG)
            out = io.StringIO()
            try:
                os.chdir(tmp)
                with contextlib.redirect_stdout(out):
                    ai_blog.main()
            finally:
                os.chdir(old)
        log = out.getvalue()
        self.assertIn("::warning::One.md is an AI Blog post outside docs/ai/", log)
        self.assertIn("same title as", log)
        self.assertNotIn("ai/One.md is an AI Blog post outside", log)


if __name__ == "__main__":
    unittest.main()
