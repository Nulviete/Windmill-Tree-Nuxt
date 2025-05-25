<template>
    <div class="pt-32 px-4">
        <div style="color: black; font-weight: bolder" class="pb-10 md:text-[40px] max-md:text-[20px]">Team</div>
        <div style="color: black; font-weight: 200" class="md:text-[40px] max-md:text-[15px]">Main team</div>

        <div>
        <div class="flex flex-row justify-center md:gap-4 max-md:gap-2 py-10 flex-wrap">
            <div class="coreMembers" v-for="member in coreMembers" :key="member.id">
                <MemberCard :member="member" class="h-auto" />
            </div>    
        </div>

        <div style="color: black; font-weight: 200" class="pb-10 md:text-[40px] max-md:text-[15px]">Long-term volunteers</div>
        <div style="color: black; font-weight: 200" class="md:text-[40px] max-md:text-[15px]">Current</div>

        <div class="flex flex-row justify-center gap-4 py-10 flex-wrap">
            <div class="coreMembers" v-for="member in presentVolunteers" :key="member.id">
                <MemberCard :member="member" class="h-auto" />
            </div>    
        </div>

        <div style="color: black; font-weight: 200" class="md:text-[40px] max-md:text-[15px]">Past</div>
        <div class="flex justify-center gap-4 py-10 flex-wrap">
            <div class="coreMembers" v-for="member in pastVolunteers" :key="member.id">
                <MemberCard :member="member" class="h-auto" />
            </div>    
        </div> 
        </div>
    </div>
    

    
</template>

<script setup>

const members = ref([])

onMounted(async () => {
    const { data } = await $fetch('api/team', {
        headers: useRequestHeaders(['cookie']),
        key: 'data-from-server',
        transform: data => data.data
    })
    members.value = data
})

const coreMembers = computed(() => {
    return members.value.filter((memb) => memb.status === null)
})

const presentVolunteers = computed(() => {
    return members.value.filter((memb) => memb.status === 'present')
})

const pastVolunteers = computed(() => {
    return members.value.filter((memb) => memb.status === 'past')
})



</script>


<style lang="scss" scoped>
@media (max-width: 900px) {
    .coreMembers {
        width: 45%;
    }

}

</style>