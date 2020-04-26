<template>
  <section id="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              {{ $t('button.login') }}
            </div>

            <div class="card-body">
              <validate-observer v-slot="{ invalid }" ref="form">
                <div class="form-group row">
                  <label for="username" class="col-md-4 col-form-label text-md-right">{{ $t('field.username') }}</label>

                  <validate-provider v-slot="{ errors }" rules="required" class="col-md-6">
                    <input
                      id="username"
                      v-model="username"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid' : errors[0] != null }"
                      autocomplete="email"
                      autofocus
                    >
                    <span v-for="error in errors" :key="error" class="invalid-feedback" role="alert">
                      <strong>{{ error }}</strong>
                    </span>
                  </validate-provider>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">{{ $t('field.password') }}</label>

                  <validate-provider v-slot="{ errors }" rules="required" class="col-md-6">
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid' : errors[0] != null}"
                      name="password"
                      autocomplete="current-password"
                    >
                    <span class="invalid-feedback" role="alert">
                      <strong>{{ errors[0] }}</strong>
                    </span>
                  </validate-provider>
                </div>

                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                      <input id="remember" class="form-check-input" type="checkbox" name="remember">

                      <label class="form-check-label" for="remember">
                        {{ $t('field.remember') }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="invalid" @click="login">
                      {{ $t('button.login') }}
                    </button>

                    <nuxt-link to="/forgot-password" class="btn btn-link">
                      {{ $t('field.forgot_pw') }}
                    </nuxt-link>
                  </div>
                </div>
              </validate-observer>
            </div>
          </div>
        </div>
      </div>
      <notifications position="bottom right" group="foo" />
    </div>
  </section>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
// Validate with Vee-Validate
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidateObserver: ValidationObserver,
    ValidateProvider: ValidationProvider
  },
  data: () => {
    return {
      username: null,
      password: null,
      errors: []
    }
  },
  methods: {
    login () {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        $('.v-loading').removeClass('d-none')
        return axios.post('api/auth/login', {
          username: this.username,
          password: this.password
        }).then(
          // eslint-disable-next-line require-await
          async (response) => {
            // eslint-disable-next-line eqeqeq
            if (response.status == 200) {
              this.$notify({
                group: 'foo',
                type: 'success',
                title: this.$t('message.login.success.title'),
                text: this.$t('message.login.success.content'),
                icon: 'icon-alert-circle'
              })
              // setTimeout(this.$router.push('/'), 10000)
            }
            // Save token
            localStorage.setItem('auth_token', response.data.token)
          }
        ).catch(() => {
          $('.v-loading').addClass('d-none')
          this.$notify({
            group: 'foo',
            type: 'danger',
            title: this.$t('message.login.fail.title'),
            text: this.$t('message.login.fail.content'),
            icon: 'icon-alert-circle'
          })
        })
      })
    }
  }
}
</script>
