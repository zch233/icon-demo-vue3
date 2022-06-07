// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CopyrightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined';

export interface CopyrightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CopyrightCircleOutlined: CopyrightCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CopyrightCircleOutlinedSvg} />
    ;

CopyrightCircleOutlined.displayName = 'CopyrightCircleOutlined';

export default FunctionalComponent;