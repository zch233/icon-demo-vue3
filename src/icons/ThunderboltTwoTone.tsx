// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';

export interface ThunderboltTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ThunderboltTwoTone: ThunderboltTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ThunderboltTwoToneSvg} />
    ;

ThunderboltTwoTone.displayName = 'ThunderboltTwoTone';

export default FunctionalComponent;