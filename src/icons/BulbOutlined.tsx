// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';

export interface BulbOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BulbOutlined: BulbOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BulbOutlinedSvg} />
    ;

BulbOutlined.displayName = 'BulbOutlined';

export default FunctionalComponent;