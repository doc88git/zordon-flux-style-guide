<template>
  <div class="FMultiSelectExample">
    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        :multiple="false"
        v-model="valueZero"
        placeholder="Cidades"
      />
    </div>

    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        v-model="valueOne"
        label="Cidades"
        type="check"
        multiple
      />
    </div>

    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        v-model="valueTwo"
        label="Cidades"
        type="check"
        multiple
      >
        <template v-slot:option-prepend="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="map-pin"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>

        <template v-slot:option-append="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="star"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>
      </f-select>
    </div>

    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        v-model="valueThree"
        label="Cidades"
        type="photo"
        searchable
        multiple
        display-null-option
        null-option-text="Nenhuma"
        null-option-icon="not-interested"
      >
        <template v-slot:option-prepend="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="map-pin"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>

        <template v-slot:option-append="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="star"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>
      </f-select>
    </div>
  </div>
</template>

<script>
import { FSelect } from '@/components/FSelect'
import optionsMock from '@/components/FSelect/example/mock'

export default {
  name: 'FMultiSelectExample',

  components: { FSelect },

  data: () => ({
    optionsMock,
    valueZero: '',
    valueOne: [],
    valueTwo: [],
    valueThree: []
  })
}
</script>

<style lang="scss" scoped>
.FMultiSelectExample {
  &__box {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
