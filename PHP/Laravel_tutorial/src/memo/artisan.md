## artisan（アーティザン）コマンド
- 各ファイル作成  
  `php artisan make:(ファイル種類)　ファイル名`  
  例 `php artisan make:controller HelloController`

  - contoroller(app/Http/Controllers)
  - provider(app/Providers)
  - middleware(app/Http/Middleware)
  - request(app/Http/Requests)
  - migration(database/migrations)
  - seeder(database/seeds)
  - model(app)
  - test(app/tests/Feature)
  - factory(app/database/factories)
  - event(app\Events)
  - listener(app\listeners)
  - job(app\Jobs)

オプション
- `--resource`　コントローラでCRUDのメソッドを用意する

- マイグレーション
  - migrate実行  
  `php artisan migrate`
  - ロールバック  
  `php artisan migrate:rollback`
  - リセット  
  `php artisan migrate:reset`

- seederを実行  
  `php artisan db:seed`

- ルート
  - ルート一覧表示  
    `php artisan route:list`