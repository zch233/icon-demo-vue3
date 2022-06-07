// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined';

export interface HistoryOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HistoryOutlined: HistoryOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HistoryOutlinedSvg} />
    ;

HistoryOutlined.displayName = 'HistoryOutlined';

export default FunctionalComponent;