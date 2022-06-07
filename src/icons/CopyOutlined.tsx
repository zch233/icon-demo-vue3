// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CopyOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyOutlined';

export interface CopyOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CopyOutlined: CopyOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CopyOutlinedSvg} />
    ;

CopyOutlined.displayName = 'CopyOutlined';

export default FunctionalComponent;