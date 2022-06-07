// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';

export interface BulbFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BulbFilled: BulbFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BulbFilledSvg} />
    ;

BulbFilled.displayName = 'BulbFilled';

export default FunctionalComponent;