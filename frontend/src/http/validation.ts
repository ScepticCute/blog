export type ValidationResult = {
  success: boolean, 
  message?: string
}

export const validationPost = (body: string, title: string): ValidationResult => {
  if(body.length < 12) {
      return {
        message: 'Контентная часть поста должна содержать как минимум 12 символов.',
        success: false
      }
    }
    if(title.length < 3) {
      return {
        message: 'Название поста должно содержать как минимум 3 символа.',
        success: false
      }
    } else {
      return {success: true}
    }
}