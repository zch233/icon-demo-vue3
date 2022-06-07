// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CompressOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompressOutlined';

export interface CompressOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CompressOutlined: CompressOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CompressOutlinedSvg} />
    ;

CompressOutlined.displayName = 'CompressOutlined';

export default FunctionalComponent;