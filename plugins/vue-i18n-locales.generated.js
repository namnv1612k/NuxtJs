export default {
  en: {
    auth: {
      failed: 'These credentials do not match our records.',
      throttle: 'Too many login attempts. Please try again in {seconds} seconds.'
    },
    button: {
      login: 'Login',
      register: 'Register',
      logout: 'Logout'
    },
    country: {
      en: 'English',
      vi: 'Tiếng Việt'
    },
    field: {
      name: 'Name',
      email: 'E-Mail Address',
      password: 'Password',
      remember: 'Remember Me',
      forgot_pw: 'Forgot Your Password?',
      confirm_pw: 'Password Confirm',
      username: 'Username'
    },
    message: {
      login: {
        success: {
          title: 'Login success',
          content: 'You are logged'
        },
        fail: {
          title: 'Login fail',
          content: 'User account or password is incorrect'
        }
      }
    },
    pagination: {
      previous: '&laquo; Previous',
      next: 'Next &raquo;'
    },
    passwords: {
      reset: 'Your password has been reset!',
      sent: 'We have e-mailed your password reset link!',
      throttled: 'Please wait before retrying.',
      token: 'This password reset token is invalid.',
      user: "We can't find a user with that e-mail address."
    },
    validation: {
      accepted: 'The {attribute} must be accepted.',
      active_url: 'The {attribute} is not a valid URL.',
      after: 'The {attribute} must be a date after {date}.',
      after_or_equal: 'The {attribute} must be a date after or equal to {date}.',
      alpha: 'The {attribute} may only contain letters.',
      alpha_dash: 'The {attribute} may only contain letters, numbers, dashes and underscores.',
      alpha_num: 'The {attribute} may only contain letters and numbers.',
      array: 'The {attribute} must be an array.',
      before: 'The {attribute} must be a date before {date}.',
      before_or_equal: 'The {attribute} must be a date before or equal to {date}.',
      between: {
        numeric: 'The {attribute} must be between {min} and {max}.',
        file: 'The {attribute} must be between {min} and {max} kilobytes.',
        string: 'The {attribute} must be between {min} and {max} characters.',
        array: 'The {attribute} must have between {min} and {max} items.'
      },
      boolean: 'The {attribute} field must be true or false.',
      confirmed: 'The {attribute} confirmation does not match.',
      date: 'The {attribute} is not a valid date.',
      date_equals: 'The {attribute} must be a date equal to {date}.',
      date_format: 'The {attribute} does not match the format {format}.',
      different: 'The {attribute} and {other} must be different.',
      digits: 'The {attribute} must be {digits} digits.',
      digits_between: 'The {attribute} must be between {min} and {max} digits.',
      dimensions: 'The {attribute} has invalid image dimensions.',
      distinct: 'The {attribute} field has a duplicate value.',
      email: 'The {attribute} must be a valid email address.',
      ends_with: 'The {attribute} must end with one of the following: {values}.',
      exists: 'The selected {attribute} is invalid.',
      file: 'The {attribute} must be a file.',
      filled: 'The {attribute} field must have a value.',
      gt: {
        numeric: 'The {attribute} must be greater than {value}.',
        file: 'The {attribute} must be greater than {value} kilobytes.',
        string: 'The {attribute} must be greater than {value} characters.',
        array: 'The {attribute} must have more than {value} items.'
      },
      gte: {
        numeric: 'The {attribute} must be greater than or equal {value}.',
        file: 'The {attribute} must be greater than or equal {value} kilobytes.',
        string: 'The {attribute} must be greater than or equal {value} characters.',
        array: 'The {attribute} must have {value} items or more.'
      },
      image: 'The {attribute} must be an image.',
      in: 'The selected {attribute} is invalid.',
      in_array: 'The {attribute} field does not exist in {other}.',
      integer: 'The {attribute} must be an integer.',
      ip: 'The {attribute} must be a valid IP address.',
      ipv4: 'The {attribute} must be a valid IPv4 address.',
      ipv6: 'The {attribute} must be a valid IPv6 address.',
      json: 'The {attribute} must be a valid JSON string.',
      lt: {
        numeric: 'The {attribute} must be less than {value}.',
        file: 'The {attribute} must be less than {value} kilobytes.',
        string: 'The {attribute} must be less than {value} characters.',
        array: 'The {attribute} must have less than {value} items.'
      },
      lte: {
        numeric: 'The {attribute} must be less than or equal {value}.',
        file: 'The {attribute} must be less than or equal {value} kilobytes.',
        string: 'The {attribute} must be less than or equal {value} characters.',
        array: 'The {attribute} must not have more than {value} items.'
      },
      max: {
        numeric: 'The {attribute} may not be greater than {max}.',
        file: 'The {attribute} may not be greater than {max} kilobytes.',
        string: 'The {attribute} may not be greater than {max} characters.',
        array: 'The {attribute} may not have more than {max} items.'
      },
      mimes: 'The {attribute} must be a file of type: {values}.',
      mimetypes: 'The {attribute} must be a file of type: {values}.',
      min: {
        numeric: 'The {attribute} must be at least {min}.',
        file: 'The {attribute} must be at least {min} kilobytes.',
        string: 'The {attribute} must be at least {min} characters.',
        array: 'The {attribute} must have at least {min} items.'
      },
      not_in: 'The selected {attribute} is invalid.',
      not_regex: 'The {attribute} format is invalid.',
      numeric: 'The {attribute} must be a number.',
      password: 'The password is incorrect.',
      present: 'The {attribute} field must be present.',
      regex: 'The {attribute} format is invalid.',
      required: 'The {attribute} field is required.',
      required_if: 'The {attribute} field is required when {other} is {value}.',
      required_unless: 'The {attribute} field is required unless {other} is in {values}.',
      required_with: 'The {attribute} field is required when {values} is present.',
      required_with_all: 'The {attribute} field is required when {values} are present.',
      required_without: 'The {attribute} field is required when {values} is not present.',
      required_without_all: 'The {attribute} field is required when none of {values} are present.',
      same: 'The {attribute} and {other} must match.',
      size: {
        numeric: 'The {attribute} must be {size}.',
        file: 'The {attribute} must be {size} kilobytes.',
        string: 'The {attribute} must be {size} characters.',
        array: 'The {attribute} must contain {size} items.'
      },
      starts_with: 'The {attribute} must start with one of the following: {values}.',
      string: 'The {attribute} must be a string.',
      timezone: 'The {attribute} must be a valid zone.',
      unique: 'The {attribute} has already been taken.',
      uploaded: 'The {attribute} failed to upload.',
      url: 'The {attribute} format is invalid.',
      uuid: 'The {attribute} must be a valid UUID.',
      custom: {
        'attribute-name': {
          'rule-name': 'custom-message'
        }
      },
      attributes: []
    }
  },
  vi: {
    auth: {
      failed: 'Những thông tin không phù hợp với hồ sơ của chúng tôi.',
      throttle: 'Đăng nhập quá nhiều lần. Thử lại sau {seconds} giây.'
    },
    button: {
      login: 'Đăng nhập',
      register: 'Đăng ký',
      logout: 'Đăng xuất'
    },
    country: {
      en: 'Tiếng Anh',
      vi: 'Tiếng Việt'
    },
    field: {
      name: 'Họ tên',
      email: 'Địa chỉ E-Mail',
      password: 'Mật khẩu',
      remember: 'Ghi nhớ',
      forgot_pw: 'Quên mật khẩu?',
      confirm_pw: 'Xác thực mật khẩu',
      username: 'Tài khoản'
    },
    message: {
      login: {
        success: {
          title: 'Thành công',
          content: 'Bạn đã đăng nhập thành công'
        },
        fail: {
          title: 'Lỗi đăng nhập',
          content: 'Sai tài khoản hoặc mật khẩu'
        }
      }
    },
    pagination: {
      previous: '&laquo; Trước',
      next: 'Sau &raquo;'
    },
    passwords: {
      reset: 'Mật khẩu của bạn đã được thiết lập lại!',
      sent: 'Chúng tôi đã gửi email liên kết đặt lại mật khẩu của bạn!',
      throttled: 'Vui lòng đợi trước khi thử lại.',
      token: 'Mã thông báo đặt lại mật khẩu này không hợp lệ.',
      user: 'Chúng tôi không thể tìm thấy người dùng có địa chỉ email đó.'
    },
    validation: {
      accepted: 'Trường {attribute} phải được chấp nhận.',
      active_url: 'Trường {attribute} không phải là một URL hợp lệ.',
      after: 'Trường {attribute} phải là một ngày sau ngày {date}.',
      after_or_equal: 'Trường {attribute} phải là thời gian bắt đầu sau hoặc đúng bằng {date}.',
      alpha: 'Trường {attribute} chỉ có thể chứa các chữ cái.',
      alpha_dash: 'Trường {attribute} chỉ có thể chứa chữ cái, số và dấu gạch ngang.',
      alpha_num: 'Trường {attribute} chỉ có thể chứa chữ cái và số.',
      array: 'Trường {attribute} phải là dạng mảng.',
      before: 'Trường {attribute} phải là một ngày trước ngày {date}.',
      before_or_equal: 'Trường {attribute} phải là thời gian bắt đầu trước hoặc đúng bằng {date}.',
      between: {
        numeric: 'Trường {attribute} phải nằm trong khoảng {min} - {max}.',
        file: 'Dung lượng tập tin trong trường {attribute} phải từ {min} - {max} kB.',
        string: 'Trường {attribute} phải từ {min} - {max} ký tự.',
        array: 'Trường {attribute} phải có từ {min} - {max} phần tử.'
      },
      boolean: 'Trường {attribute} phải là true hoặc false.',
      confirmed: 'Giá trị xác nhận trong trường {attribute} không khớp.',
      date: 'Trường {attribute} không phải là định dạng của ngày-tháng.',
      date_equals: 'Trường {attribute} phải là một ngày bằng với {date}.',
      date_format: 'Trường {attribute} không giống với định dạng {format}.',
      different: 'Trường {attribute} và {other} phải khác nhau.',
      digits: 'Độ dài của trường {attribute} phải gồm {digits} chữ số.',
      digits_between: 'Độ dài của trường {attribute} phải nằm trong khoảng {min} and {max} chữ số.',
      dimensions: 'Trường {attribute} có kích thước không hợp lệ.',
      distinct: 'Trường {attribute} có giá trị trùng lặp.',
      email: 'Trường {attribute} phải là một địa chỉ email hợp lệ.',
      ends_with: 'Trường {attribute} phải kết thúc bằng một trong những giá trị sau: {values}',
      exists: 'Giá trị đã chọn trong trường {attribute} không hợp lệ.',
      file: 'Trường {attribute} phải là một tệp tin.',
      filled: 'Trường {attribute} không được bỏ trống.',
      gt: {
        numeric: 'Giá trị trường {attribute} phải lớn hơn {value}.',
        file: 'Dung lượng trường {attribute} phải lớn hơn {value} kilobytes.',
        string: 'Độ dài trường {attribute} phải nhiều hơn {value} kí tự.',
        array: 'Mảng {attribute} phải có nhiều hơn {value} phần tử.'
      },
      gte: {
        numeric: 'Giá trị trường {attribute} phải lớn hơn hoặc bằng {value}.',
        file: 'Dung lượng trường {attribute} phải lớn hơn hoặc bằng {value} kilobytes.',
        string: 'Độ dài trường {attribute} phải lớn hơn hoặc bằng {value} kí tự.',
        array: 'Mảng {attribute} phải có ít nhất {value} phần tử.'
      },
      image: 'Trường {attribute} phải là định dạng hình ảnh.',
      in: 'Giá trị đã chọn trong trường {attribute} không hợp lệ.',
      in_array: 'Trường {attribute} phải thuộc tập cho phép: {other}.',
      integer: 'Trường {attribute} phải là một số nguyên.',
      ip: 'Trường {attribute} phải là một địa chỉ IP.',
      ipv4: 'Trường {attribute} phải là một địa chỉ IPv4.',
      ipv6: 'Trường {attribute} phải là một địa chỉ IPv6.',
      json: 'Trường {attribute} phải là một chuỗi JSON.',
      lt: {
        numeric: 'Giá trị trường {attribute} phải nhỏ hơn {value}.',
        file: 'Dung lượng trường {attribute} phải nhỏ hơn {value} kilobytes.',
        string: 'Độ dài trường {attribute} phải nhỏ hơn {value} kí tự.',
        array: 'Mảng {attribute} phải có ít hơn {value} phần tử.'
      },
      lte: {
        numeric: 'Giá trị trường {attribute} phải nhỏ hơn hoặc bằng {value}.',
        file: 'Dung lượng trường {attribute} phải nhỏ hơn hoặc bằng {value} kilobytes.',
        string: 'Độ dài trường {attribute} phải nhỏ hơn hoặc bằng {value} kí tự.',
        array: 'Mảng {attribute} không được có nhiều hơn {value} phần tử.'
      },
      max: {
        numeric: 'Trường {attribute} không được lớn hơn {max}.',
        file: 'Dung lượng tập tin trong trường {attribute} không được lớn hơn {max} kB.',
        string: 'Trường {attribute} không được lớn hơn {max} ký tự.',
        array: 'Trường {attribute} không được lớn hơn {max} phần tử.'
      },
      mimes: 'Trường {attribute} phải là một tập tin có định dạng: {values}.',
      mimetypes: 'Trường {attribute} phải là một tập tin có định dạng: {values}.',
      min: {
        numeric: 'Trường {attribute} phải tối thiểu là {min}.',
        file: 'Dung lượng tập tin trong trường {attribute} phải tối thiểu {min} kB.',
        string: 'Trường {attribute} phải có tối thiểu {min} ký tự.',
        array: 'Trường {attribute} phải có tối thiểu {min} phần tử.'
      },
      not_in: 'Giá trị đã chọn trong trường {attribute} không hợp lệ.',
      not_regex: 'Trường {attribute} có định dạng không hợp lệ.',
      numeric: 'Trường {attribute} phải là một số.',
      password: 'Mật khẩu không đúng.',
      present: 'Trường {attribute} phải được cung cấp.',
      regex: 'Trường {attribute} có định dạng không hợp lệ.',
      required: 'Trường {attribute} không được bỏ trống.',
      required_if: 'Trường {attribute} không được bỏ trống khi trường {other} là {value}.',
      required_unless: 'Trường {attribute} không được bỏ trống trừ khi {other} là {values}.',
      required_with: 'Trường {attribute} không được bỏ trống khi một trong {values} có giá trị.',
      required_with_all: 'Trường {attribute} không được bỏ trống khi tất cả {values} có giá trị.',
      required_without: 'Trường {attribute} không được bỏ trống khi một trong {values} không có giá trị.',
      required_without_all: 'Trường {attribute} không được bỏ trống khi tất cả {values} không có giá trị.',
      same: 'Trường {attribute} và {other} phải giống nhau.',
      size: {
        numeric: 'Trường {attribute} phải bằng {size}.',
        file: 'Dung lượng tập tin trong trường {attribute} phải bằng {size} kB.',
        string: 'Trường {attribute} phải chứa {size} ký tự.',
        array: 'Trường {attribute} phải chứa {size} phần tử.'
      },
      starts_with: 'Trường {attribute} phải được bắt đầu bằng một trong những giá trị sau: {values}',
      string: 'Trường {attribute} phải là một chuỗi ký tự.',
      timezone: 'Trường {attribute} phải là một múi giờ hợp lệ.',
      unique: 'Trường {attribute} đã có trong cơ sở dữ liệu.',
      uploaded: 'Trường {attribute} tải lên thất bại.',
      url: 'Trường {attribute} không giống với định dạng một URL.',
      uuid: 'Trường {attribute} phải là một chuỗi UUID hợp lệ.',
      custom: {
        'attribute-name': {
          'rule-name': 'custom-message'
        }
      },
      attributes: {
        name: 'tên',
        username: 'tên đăng nhập',
        email: 'email',
        first_name: 'tên',
        last_name: 'họ',
        password: 'mật khẩu',
        password_confirmation: 'xác nhận mật khẩu',
        city: 'thành phố',
        country: 'quốc gia',
        address: 'địa chỉ',
        phone: 'số điện thoại',
        mobile: 'di động',
        age: 'tuổi',
        sex: 'giới tính',
        gender: 'giới tính',
        year: 'năm',
        month: 'tháng',
        day: 'ngày',
        hour: 'giờ',
        minute: 'phút',
        second: 'giây',
        title: 'tiêu đề',
        content: 'nội dung',
        body: 'nội dung',
        description: 'mô tả',
        excerpt: 'trích dẫn',
        date: 'ngày',
        time: 'thời gian',
        subject: 'tiêu đề',
        message: 'lời nhắn',
        available: 'có sẵn',
        size: 'kích thước'
      }
    }
  }
}
