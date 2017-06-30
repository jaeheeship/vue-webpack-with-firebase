<template lang="jade">

div.form-wrapper 
    div.form-wrapper-header
        img(src="./../../assets/logo@1.5x.png") 
    form.form
        h1 패스워드를 초기화하세요.
        div.field
            p.control
                input.input.is-medium(type=email,placeholder="EMAIL ADDRESS",v-model="email")
        div.form-footer.columns.is-mobile
            div.column
                button.pull-right.button.is-info(
                    v-on:click.prevent="reset"
                ) 패스워드 리셋

</template>

<script type="ts"> 
import PasswordReset from '@/components/auth/PasswordReset.ts'

export default PasswordReset 

</script>

<style lang="scss">
</style>