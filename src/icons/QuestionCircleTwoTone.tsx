// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone';

export interface QuestionCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const QuestionCircleTwoTone: QuestionCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={QuestionCircleTwoToneSvg} />
    ;

QuestionCircleTwoTone.displayName = 'QuestionCircleTwoTone';

export default FunctionalComponent;