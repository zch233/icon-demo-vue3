// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PlusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusSquareOutlined';

export interface PlusSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlusSquareOutlined: PlusSquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PlusSquareOutlinedSvg} />
    ;

PlusSquareOutlined.displayName = 'PlusSquareOutlined';

export default FunctionalComponent;