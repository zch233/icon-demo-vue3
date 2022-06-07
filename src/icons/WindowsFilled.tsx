// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';

export interface WindowsFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WindowsFilled: WindowsFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WindowsFilledSvg} />
    ;

WindowsFilled.displayName = 'WindowsFilled';

export default FunctionalComponent;