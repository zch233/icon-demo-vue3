// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';

export interface LeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LeftOutlined: LeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LeftOutlinedSvg} />
    ;

LeftOutlined.displayName = 'LeftOutlined';

export default FunctionalComponent;