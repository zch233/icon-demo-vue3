// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined';

export interface DiffOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DiffOutlined: DiffOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DiffOutlinedSvg} />
    ;

DiffOutlined.displayName = 'DiffOutlined';

export default FunctionalComponent;