// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import InfoCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/InfoCircleTwoTone';

export interface InfoCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InfoCircleTwoTone: InfoCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={InfoCircleTwoToneSvg} />
    ;

InfoCircleTwoTone.displayName = 'InfoCircleTwoTone';

export default FunctionalComponent;