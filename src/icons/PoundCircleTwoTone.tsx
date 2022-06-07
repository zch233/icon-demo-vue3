// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone';

export interface PoundCircleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PoundCircleTwoTone: PoundCircleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PoundCircleTwoToneSvg} />
    ;

PoundCircleTwoTone.displayName = 'PoundCircleTwoTone';

export default FunctionalComponent;