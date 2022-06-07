// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';

export interface ChromeFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ChromeFilled: ChromeFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ChromeFilledSvg} />
    ;

ChromeFilled.displayName = 'ChromeFilled';

export default FunctionalComponent;