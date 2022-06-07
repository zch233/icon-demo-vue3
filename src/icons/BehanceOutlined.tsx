// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';

export interface BehanceOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BehanceOutlined: BehanceOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BehanceOutlinedSvg} />
    ;

BehanceOutlined.displayName = 'BehanceOutlined';

export default FunctionalComponent;