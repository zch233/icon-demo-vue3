// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';

export interface BehanceSquareOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BehanceSquareOutlined: BehanceSquareOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BehanceSquareOutlinedSvg} />
    ;

BehanceSquareOutlined.displayName = 'BehanceSquareOutlined';

export default FunctionalComponent;