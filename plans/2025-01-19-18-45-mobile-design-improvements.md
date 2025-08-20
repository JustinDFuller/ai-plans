# Mobile Design Improvements

## Summary

Fixed AI Plans MDC rule configuration to use `alwaysApply: true` instead of globs targeting code files, since AI Plans documentation should be created globally regardless of which files are being edited.

## Original Request

"I don't think the globs in @src/pages/CursorPage.tsx make sense. I think this should be a global, always apply rule."

## AI's Plan

### Analysis

The original MDC rule example used globs targeting code files (`["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]`), which doesn't make logical sense for an AI Plans documentation rule. AI Plans should be created when working on any feature or fix, not just when specific file types are being edited.

### Changes Required

1. Update the MDC rule example to use `alwaysApply: true`
2. Remove the globs configuration since it's not applicable
3. Update the rule activation guidance to reflect this best practice
4. Fix the pro tip that incorrectly suggested using globs

## AI's TODOs

1. ✅ Update MDC rule to use `alwaysApply: true` and remove globs
2. ✅ Revise Step 3 guidance to explain why always-apply is recommended
3. ✅ Update pro tip about auto-applying to reflect the correct approach

## Major Issues Encountered

None - straightforward configuration fix.

---

_Generated: 2025-01-19 18:45_
_Tool: Claude Code_
_Context: Improving AI Plans documentation accuracy_
