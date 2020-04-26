import { extend, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

export default ({ app }) => {
  configure({
    defaultMessage: (field, values) => {
      // override the field name
      values._field_ = app.i18n.t(`fields.${field}`)
      return app.i18n.t(`validation.${values._rule_}`, values)
    }
  })
}

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule] // copies rule configuration
    //   message: messages[rule] // assign message
  })
})
