import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ClaudeCodePage from './pages/ClaudeCodePage';
import CursorPage from './pages/CursorPage';
import GitHubCopilotPage from './pages/GitHubCopilotPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="claude-code" element={<ClaudeCodePage />} />
        <Route path="cursor" element={<CursorPage />} />
        <Route path="github-copilot" element={<GitHubCopilotPage />} />
      </Route>
    </Routes>
  );
};

export default App;
