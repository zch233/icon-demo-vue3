// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined';

export interface CheckSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CheckSquareOutlined: CheckSquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CheckSquareOutlinedSvg} />
    ;

CheckSquareOutlined.displayName = 'CheckSquareOutlined';

export default FunctionalComponent;