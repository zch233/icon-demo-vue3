// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined';

export interface CrownOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CrownOutlined: CrownOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CrownOutlinedSvg} />
    ;

CrownOutlined.displayName = 'CrownOutlined';

export default FunctionalComponent;