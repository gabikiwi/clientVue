import Api from '@/services/Api'

// export an object that has a couple of methods
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// we can call this object like this and pass
/* AuthenticationService.register({
  email: 'testing@gmail.com',
  password: '123456'
}) */
