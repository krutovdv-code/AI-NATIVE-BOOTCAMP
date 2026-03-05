# Как запушить проект на GitHub

Cursor добавляет к коммитам опцию `--trailer`, которую не поддерживает твоя версия Git.
Выполни эти команды **в обычном терминале** (Terminal.app, iTerm), а не в терминале Cursor.

```bash
cd /Users/dmitri/Desktop/cursor/ai-native-bootcamp

# коммит
git commit -m "Initial commit"

# переименовать ветку в main
git branch -M main

# добавить удалённый репозиторий (если ещё не добавлен)
git remote add origin https://github.com/krutovdv-code/AI-NATIVE-BOOTCAMP.git

# отправить на GitHub
git push -u origin main
```

Если `git remote add` выдаст ошибку "remote origin already exists" — значит remote уже добавлен, просто выполни `git push -u origin main`.
