// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';

export interface ColumnWidthOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ColumnWidthOutlined: ColumnWidthOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ColumnWidthOutlinedSvg} />;

ColumnWidthOutlined.displayName = 'ColumnWidthOutlined';

export default FunctionalComponent;