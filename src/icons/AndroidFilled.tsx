// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled';

export interface AndroidFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AndroidFilled: AndroidFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AndroidFilledSvg} />
    ;

AndroidFilled.displayName = 'AndroidFilled';

export default FunctionalComponent;