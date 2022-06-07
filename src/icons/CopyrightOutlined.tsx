// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CopyrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined';

export interface CopyrightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CopyrightOutlined: CopyrightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CopyrightOutlinedSvg} />
    ;

CopyrightOutlined.displayName = 'CopyrightOutlined';

export default FunctionalComponent;