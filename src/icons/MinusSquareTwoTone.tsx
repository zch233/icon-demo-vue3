// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone';

export interface MinusSquareTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MinusSquareTwoTone: MinusSquareTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MinusSquareTwoToneSvg} />
    ;

MinusSquareTwoTone.displayName = 'MinusSquareTwoTone';

export default FunctionalComponent;