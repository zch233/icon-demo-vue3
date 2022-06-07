// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined';

export interface ScanOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ScanOutlined: ScanOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ScanOutlinedSvg} />
    ;

ScanOutlined.displayName = 'ScanOutlined';

export default FunctionalComponent;