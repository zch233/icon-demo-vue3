// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone';

export interface UpCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UpCircleTwoTone: UpCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UpCircleTwoToneSvg} />
    ;

UpCircleTwoTone.displayName = 'UpCircleTwoTone';

export default FunctionalComponent;