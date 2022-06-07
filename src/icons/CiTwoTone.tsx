// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone';

export interface CiTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CiTwoTone: CiTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CiTwoToneSvg} />
    ;

CiTwoTone.displayName = 'CiTwoTone';

export default FunctionalComponent;