// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';

export interface DownOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DownOutlined: DownOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DownOutlinedSvg} />
    ;

DownOutlined.displayName = 'DownOutlined';

export default FunctionalComponent;