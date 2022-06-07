// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UngroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/UngroupOutlined';

export interface UngroupOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UngroupOutlined: UngroupOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UngroupOutlinedSvg} />
    ;

UngroupOutlined.displayName = 'UngroupOutlined';

export default FunctionalComponent;