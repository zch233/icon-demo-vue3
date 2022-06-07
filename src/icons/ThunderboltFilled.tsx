// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled';

export interface ThunderboltFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ThunderboltFilled: ThunderboltFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ThunderboltFilledSvg} />
    ;

ThunderboltFilled.displayName = 'ThunderboltFilled';

export default FunctionalComponent;