// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CopyrightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone';

export interface CopyrightCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CopyrightCircleTwoTone: CopyrightCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CopyrightCircleTwoToneSvg} />
    ;

CopyrightCircleTwoTone.displayName = 'CopyrightCircleTwoTone';

export default FunctionalComponent;