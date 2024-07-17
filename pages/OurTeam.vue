<template>
<div>
   <div class="flex justify-center gap-4 py-10 flex-wrap">
    <div class="headMembers" v-for="member in headMembers" :key="member.id">
        <MemberCard :member="member" class="h-auto" />
    </div>    
</div>

<div class="flex justify-center gap-4 py-10 flex-wrap">
    <div class="headMembers" v-for="member in rootMembers" :key="member.id">
        <MemberCard :member="member" class="h-auto" />
    </div>    
</div>

<div class="flex justify-center gap-4 py-10 flex-wrap">
    <div class="headMembers" v-for="member in volunteers" :key="member.id">
        <MemberCard :member="member" class="h-auto" />
    </div>    
</div> 
</div>

    
</template>

<script setup>

const members = ref([])

onMounted(async () => {
    const { data } = await $fetch('api/members', {
        headers: useRequestHeaders(['cookie']),
        key: 'data-from-server',
        transform: data => data.data
    })
    members.value = data
})

const headMembers = computed(() => {
    return members.value.filter((memb) => memb.position === 'Head of the Foundation' || memb.position === 'Vice')
})

const rootMembers = computed(() => {
    return members.value.filter((memb) => memb.position === 'Root Member')
})

const volunteers = computed(() => {
    return members.value.filter((memb) => memb.position === 'Volunteer')
})



</script>


<style lang="scss" scoped>

</style>