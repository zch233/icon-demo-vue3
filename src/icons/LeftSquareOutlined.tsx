// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftSquareOutlined';

export interface LeftSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const LeftSquareOutlined: LeftSquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={LeftSquareOutlinedSvg} />
    ;

LeftSquareOutlined.displayName = 'LeftSquareOutlined';

export default FunctionalComponent;