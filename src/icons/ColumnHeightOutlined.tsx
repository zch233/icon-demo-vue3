// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ColumnHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnHeightOutlined';

export interface ColumnHeightOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ColumnHeightOutlined: ColumnHeightOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ColumnHeightOutlinedSvg} />
    ;

ColumnHeightOutlined.displayName = 'ColumnHeightOutlined';

export default FunctionalComponent;