<template>
  <section id="register">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            {{ $t('button.register') }}
          </div>

          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ $t('field.name') }}</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="name"
                    autocomplete="name"
                    autofocus
                  >

                  <span class="invalid-feedback" role="alert">
                    <strong>message</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ $t('field.email') }}</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" autocomplete="email">

                  <span class="invalid-feedback" role="alert">
                    <strong>message</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">{{ $t('field.password') }}</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" autocomplete="new-password">

                  <span class="invalid-feedback" role="alert">
                    <strong>message</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ $t('field.confirm_pw') }}</label>

                <div class="col-md-6">
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    required
                    autocomplete="new-password"
                  >
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    {{ $t('button.register') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
