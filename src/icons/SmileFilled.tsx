// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';

export interface SmileFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SmileFilled: SmileFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SmileFilledSvg} />
    ;

SmileFilled.displayName = 'SmileFilled';

export default FunctionalComponent;