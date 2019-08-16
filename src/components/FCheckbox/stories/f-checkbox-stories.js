import { storiesOf } from "@storybook/vue";
import { withKnobs, text, color, boolean, number } from '@storybook/addon-knobs';

import FCheckbox from "../FCheckbox.vue";

const stories = storiesOf("Components|Checkbox", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => ({
    components: {
      FCheckbox
    },
    props: {
      isDisabled: {
        type: Boolean,
        default: boolean('Disabled', false)
      },
      label: {
        type: String,
        default: text('label')
      },
      color: {
        type: String,
        default: color('color', 'black')
      }
    },
    template: `
      <div class="p-8">
        <f-checkbox :isDisabled="isDisabled">
          <label>
            {{ label }}
          </label>
        </f-checkbox>
      </div>
    `
  })
);
