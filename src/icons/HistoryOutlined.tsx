// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined';

export interface HistoryOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HistoryOutlined: HistoryOutlinedIconType = (props, context) => <Icon name='HistoryOutlined' {...{ ...props, ...context.attrs }} icon={HistoryOutlinedSvg} />;

HistoryOutlined.displayName = 'HistoryOutlined';

export default HistoryOutlined;