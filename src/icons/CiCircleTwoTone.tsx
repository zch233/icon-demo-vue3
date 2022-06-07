// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CiCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiCircleTwoTone';

export interface CiCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CiCircleTwoTone: CiCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CiCircleTwoToneSvg} />
    ;

CiCircleTwoTone.displayName = 'CiCircleTwoTone';

export default FunctionalComponent;