<template>
  <div :class="classes"></div>
</template>

<script>
const Name = 'j-babble'
export default {
    name:Name,
    computed:{
        classes(){
            return [Name]
        }
    }
}
</script>

<style>

</style>
